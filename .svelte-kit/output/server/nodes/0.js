import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.OOasE5_I.js","_app/immutable/chunks/CRmGNqMR.js","_app/immutable/chunks/D1CJRQLn.js","_app/immutable/chunks/D7JDYX_X.js","_app/immutable/chunks/CJuP1WCt.js","_app/immutable/chunks/DpybdDyf.js","_app/immutable/chunks/DfZRADv0.js","_app/immutable/chunks/CPpT_tx3.js"];
export const stylesheets = ["_app/immutable/assets/0.D_qohX7J.css"];
export const fonts = [];
