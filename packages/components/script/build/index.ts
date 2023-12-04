import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import createDebug from 'gulp-debug';
const debug = createDebug('gulp');
import { pkgPath,componentPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
//删除junui dist
export const removeDist = () => {
  return delPath(`${pkgPath}/junui`);
};
//打包样式
export const buildStyle = () => {
  console.log('buildStyle>>>>>')
  console.log('componentPath>>>', componentPath, pkgPath)
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(debug())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/junui/lib/src`))
    .pipe(dest(`${pkgPath}/junui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  console.log('buildComponent>>>>', componentPath)
  run("pnpm run build", componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
