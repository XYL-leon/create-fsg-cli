# FSG-CLI

## Forecast Service Group CLI

### log

1. package.json
   1. 配置bin create-fsg-cli
      1. 配置好bin后，在本项目中运行npm link，这样就可以直接使用create-fsg-cli而不是node dist/index.js
2. 交互式命令界面工具
   1. inquirer 老版，使用广泛、内容丰富、生态成熟
   2. @clack/prompts 新版，设计现代、API简洁及内置加载状态、取消处理和样式美化，vite官方使用
