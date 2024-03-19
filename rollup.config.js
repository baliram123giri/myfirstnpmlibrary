// rollup.config.js
import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name: "my-first-npm-package"
    },
    external: ["react", "react-dom"],
    plugins: [typescript({ tsconfig: "tsconfig.json" })]
})