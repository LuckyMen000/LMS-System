const config = {
    compilerOptions: {
      target: "ES6",              // Целевая версия JavaScript
      module: "CommonJS",         // Система модулей
      strict: true,               // Включение строгого режима
      esModuleInterop: true,      // Совместимость с модулями ES
      skipLibCheck: true,         // Пропуск проверки типов в node_modules
      forceConsistentCasingInFileNames: true, // Следить за регистрозависимостью путей
      outDir: "./dist",           // Папка для компилированных файлов
      rootDir: "./src",           // Папка исходного кода
      baseUrl: "./",              // Базовая директория
      paths: {                    // Маппинг путей
        "@/*": ["src/*"]
      }
    },
    include: ["src/**/*"],        // Включение файлов для компиляции
    exclude: ["node_modules", "dist"] // Исключение папок из компиляции
  };
  
  export default config;
  