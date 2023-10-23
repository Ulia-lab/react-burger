import { FormEventHandler, ReactNode } from "react";

export interface AuthFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  /** текст авторизации */
  title: string;
  /** текст кнопки авторизации */
  btnTitle: string;
  /** текст подсказок авторизации */
  suggestions: Array<string>;
  children?: ReactNode;
}



