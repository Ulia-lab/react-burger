import React from 'react'
import authStyle from './auth.module.css'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

// TODO const {values, handleChange, setValues} = useForm({});
export function AuthForm({ onSubmit, title, btnTitle, suggestions, children }) {
    return (
        <div className={authStyle.block}>
            <form
                onSubmit={onSubmit}
                className={cn('mb-20 mt-20', authStyle.gap)}
            >
                <h2 className="text text_type_main-medium">{title}</h2>
                {children}
                <Button htmlType="submit" type="primary" size="large">
                    {btnTitle}
                </Button>
            </form>
            <div
                className={cn(
                    'text text_type_main-default text_color_inactive',
                    authStyle.suggestions
                )}
            >
                {suggestions?.map((suggestion, index) => (
                    <div key={index} className={authStyle.suggestion}>
                        <p>{suggestion.text}</p>
                        <Link className={authStyle.link} to={suggestion.link}>
                            {suggestion.linkText}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AuthForm
