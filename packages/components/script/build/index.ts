import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
//删除dist

export const removeDist = () => {
  return delPath(`${pkgPath}/junui`);
};

//打包样式
export const buildStyle = () => {
  // console.log('componentPath>>>', componentPath, pkgPath)
  // console.log('ss', src(`${componentPath}/src/**/style/**.less`))
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    // .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/junui/lib/src`))
    .pipe(dest(`${pkgPath}/junui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
