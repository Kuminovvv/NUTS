const siteConfigBase = {
    name: "WTH",
    description: "",
    icons: {
        icon: "/favicon.ico", // Корректная иконка для сайта
    },
    routes: {
        home: {
            label: "Главная",
            href: "/",
        },
        input: {
            label: "Поле ввода",
            href: "/input_example",
        },
    },
};

export const siteConfig = {
    ...siteConfigBase,
    siteRouting: Object.values(siteConfigBase.routes), // Преобразуем объект routes в массив
};

export type SiteConfig = typeof siteConfig;
