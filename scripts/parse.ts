import fs from "fs";
import path from "path";
import util from "util";
import { ungzip } from "node-gzip";
import { removeFileExtension } from "./removeFileExtension";
import { getRequestRecordFromSourceRow } from "./getRequestRecordFromSourceRow";

(async () => {
    const source_root = path.resolve(__dirname, "../src");
    const destination_root = path.resolve(__dirname, "../dist");
    if (!fs.existsSync(destination_root)) fs.mkdirSync(destination_root);

    console.log(`Parsing everything from ${source_root} into ${destination_root}`);

    const source_list = fs.readdirSync(source_root);

    console.log(util.inspect(source_list, false, null, true /* enable colors */));

    for (let source_filename of source_list) {
        const source_path = path.resolve(source_root, source_filename);
        const destination_path = path.resolve(destination_root, `${removeFileExtension(source_filename)}.json`)
        console.log(`Decompressing ${source_path} into ${destination_path}`);

        const source_file = fs.readFileSync(source_path);
        const decompressed_source_file = (await ungzip(source_file)).toString();

        const source_rows = decompressed_source_file.split("\n");

        let parsed_data = [];
        let record_count = 0;

        // the first two and the last row are skipped intentionally
        // 1. version row
        // 2. fields row
        // last row is empty
        const FIRST_DATA_ROW_INDEX = 2;
        const LAST_DATA_ROW_INDEX = source_rows.length - 1;
        for (let i = FIRST_DATA_ROW_INDEX; i < LAST_DATA_ROW_INDEX; i++) {
            record_count++;
            console.log(`Parsing record ${record_count} from ${LAST_DATA_ROW_INDEX - FIRST_DATA_ROW_INDEX}`);
            const parsed_item = getRequestRecordFromSourceRow(source_rows[i]);
            parsed_data.push(parsed_item);
        }
        fs.writeFileSync(destination_path, JSON.stringify(parsed_data));
    }
})()
