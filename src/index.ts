import * as fs from 'fs';
import { join } from 'path';
import { GetLogger, SetConsoleOutput, LogLevel, AssetsDefinitionFile, AssetsGraphicsDefinitionFile } from 'pandora-common';
import { SetCurrentContext } from './tools';
import rimraf from 'rimraf';
import { AssetDatabase } from './tools/assetDatabase';
import { ClearAllResources, DefineResourceInline, ExportAllResources } from './tools/resources';
import { RunWithWatch } from './tools/watch';
import { boneDefinition } from './bones';
import { GraphicsDatabase } from './tools/graphicsDatabase';

const logger = GetLogger('Main');
SetConsoleOutput(LogLevel.DEBUG);

const ASSET_DEST_DIR = join(__dirname, 'assets');
const ASSET_SRC_DIR = join(__dirname, '..', 'src', 'assets');
const DEST_DIR = join(__dirname, '..', 'out');

async function Run() {
	GraphicsDatabase.clear();
	AssetDatabase.clear();
	ClearAllResources();

	for (const category of fs.readdirSync(ASSET_SRC_DIR)) {
		const categoryDestPath = join(ASSET_DEST_DIR, category);
		const categorySrcPath = join(ASSET_SRC_DIR, category);

		if (!fs.statSync(categoryDestPath).isDirectory()) {
			throw new Error(`assets/${category} is not directory`);
		}
		if (!fs.statSync(categorySrcPath).isDirectory()) {
			throw new Error(`assets/${category} missing in source path`);
		}

		for (const asset of fs.readdirSync(categorySrcPath)) {
			const assetDestPath = join(categoryDestPath, asset);
			const assetSrcPath = join(categorySrcPath, asset);

			if (!fs.statSync(assetDestPath).isDirectory()) {
				throw new Error(`assets/${category}/${asset} is not directory`);
			}
			if (!fs.statSync(assetSrcPath).isDirectory()) {
				throw new Error(`assets/${category}/${asset} missing in source path`);
			}
			if (!fs.statSync(join(assetSrcPath, `${asset}.asset.ts`)).isFile()) {
				throw new Error(`assets/${category}/${asset} expected asset file '${asset}.asset.ts' not found`);
			}

			SetCurrentContext(category, asset, assetSrcPath);

			logger.verbose(`Processing assets/${category}/${asset}...`);

			try {
				const moduleName = join(assetDestPath, `${asset}.asset`);
				delete require.cache[require.resolve(moduleName)];
				await require(moduleName);
			} catch (error) {
				logger.fatal(`Error while importing assets/${category}/${asset}\n`, error);
				process.exit(1);
			}
		}
	}

	logger.info('Exporting result...');
	// Remove any existing output and make empty directory
	if (fs.existsSync(DEST_DIR)) {
		rimraf.sync(DEST_DIR);
	}
	fs.mkdirSync(DEST_DIR);

	const graphics: AssetsGraphicsDefinitionFile = {
		assets: GraphicsDatabase.export(),
	};
	const graphicsFile = DefineResourceInline('graphics.json', JSON.stringify(graphics));

	const definitions: AssetsDefinitionFile = {
		assets: AssetDatabase.export(),
		bones: boneDefinition,
		graphicsId: graphicsFile.hash,
	};
	const definitionsFile = DefineResourceInline('assets.json', JSON.stringify(definitions));

	ExportAllResources(DEST_DIR);
	fs.writeFileSync(join(DEST_DIR, 'current'), `${definitionsFile.hash}\n`);

	logger.info('Done!');
}

if (process.argv.includes('--watch')) {
	RunWithWatch(Run);
} else {
	Run().catch((error) => {
		logger.fatal('Error:\n', error);
	});
}
