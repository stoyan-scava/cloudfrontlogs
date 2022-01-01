import { RequestRecord } from "./interfaces";

export const getRequestRecordFromSourceRow = (row: string): RequestRecord => {
    console.log("getRequestRecordFromSourceRow");
    const values = row.split("\t");
    console.log(values);
    return {
        date: values[0],
        time: values[1],
        'x-edge-location': values[2],
        'sc-bytes': values[3],
        'c-ip': values[4],
        'cs-method': values[5],
        'cs(Host)': values[6],
        'cs-uri-stem': values[7],
        'sc-status': values[8],
        'cs(Referer)': values[9],
        'cs(User-Agent)': values[10],
        'cs-uri-query': values[11],
        'cs(Cookie)': values[12],
        'x-edge-result-type': values[13],
        'x-edge-request-id': values[14],
        'x-host-header': values[15],
        'cs-protocol': values[16],
        'cs-bytes': values[17],
        'time-taken': values[18],
        'x-forwarded-for': values[19],
        'ssl-protocol': values[20],
        'ssl-cipher': values[21],
        'x-edge-response-result-type': values[22],
        'cs-protocol-version': values[23],
        'fle-status': values[24],
        'fle-encrypted-fields': values[25],
        'c-port': values[26],
        'time-to-first-byte': values[27],
        'x-edge-detailed-result-type': values[28],
        'sc-content-type': values[29],
        'sc-content-len': values[30],
        'sc-range-start': values[31],
        'sc-range-end': values[32]
    }
}
