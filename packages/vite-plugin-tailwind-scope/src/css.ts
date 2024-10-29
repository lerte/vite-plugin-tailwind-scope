import clsx from "clsx";

type CSSModuleClasses = {
  readonly [key: string]: string;
};

export const css = (styles: CSSModuleClasses) => {
  return (strings: ReadonlyArray<string>) => {
    const names = clsx([...strings]);
    const classNames = names.split(" ");
    return classNames.map((item) => styles[item]).join(" ");
  };
};
