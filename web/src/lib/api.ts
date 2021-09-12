/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { Method } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function SendReq(
	url: string,
	method: Method,
	headers?: any
): Promise<any> {
	const req = axios({
		method: method,
		url: url,
		headers: headers,
	}).then((val) => val.data);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return req as any;
}
