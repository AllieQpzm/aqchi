const ALLIEQPZM_ICONS_MAP = {
    "nvidia":
        "M82.211 102.414s22.504-33.203 67.437-36.638V53.73c-49.769 3.997-92.867 46.149-92.867 46.149s24.41 70.564 92.867 77.026v-12.804c-50.237-6.32-67.437-61.687-67.437-61.687zm67.437 36.223v11.727c-37.968-6.77-48.507-46.237-48.507-46.237s18.23-20.195 48.507-23.47v12.867c-.023 0-.039-.007-.058-.007-15.891-1.907-28.305 12.938-28.305 12.938s6.958 24.99 28.363 32.182m0-107.125V53.73c1.461-.112 2.922-.207 4.391-.257 56.582-1.907 93.449 46.406 93.449 46.406s-42.343 51.488-86.457 51.488c-4.043 0-7.828-.375-11.383-1.005v13.739a75.04 75.04 0 0 0 9.481.612c41.051 0 70.738-20.965 99.484-45.778 4.766 3.817 24.278 13.103 28.289 17.167-27.332 22.884-91.031 41.33-127.144 41.33-3.481 0-6.824-.211-10.11-.528v19.306H305.68V31.512H149.648zm0 49.144V65.777c1.446-.101 2.903-.179 4.391-.226 40.688-1.278 67.382 34.965 67.382 34.965s-28.832 40.042-59.746 40.042c-4.449 0-8.438-.715-12.028-1.922V93.523c15.84 1.914 19.028 8.911 28.551 24.786l21.181-17.859s-15.461-20.277-41.524-20.277c-2.834-.001-5.545.198-8.207.483",

};

// Iconset API (Home Assistant 0.110 and up):
async function getIcon(name) {
    var primaryPath = ALLIEQPZM_ICONS_MAP[name];
    return {
        path: primaryPath,
        viewBox: "0 0 24 24"
    };
    return { path: ALLIEQPZM_ICONS_MAP[name] };
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["allieqpzm"] = getIcon;

if (!window.frontendVersion || window.frontendVersion < 20200519.0) {
    // ha-iconset-svg (Up to Home Assistant 0.109):
    const iconset = document.createElement("ha-iconset-svg");
    iconset.name = "allieqpzm";
    iconset.size = "24";

    let iconsetHTML = "";
    for (let key in ALLIEQPZM_ICONS_MAP) {
        iconsetHTML += `<g id="${key}"><path d="${PAP_ICONS_MAP[key]}" /></g>`;
    }

    iconset.innerHTML = `<svg><defs>${iconsetHTML}</defs></svg>`;
    document.body.appendChild(iconset);
}
