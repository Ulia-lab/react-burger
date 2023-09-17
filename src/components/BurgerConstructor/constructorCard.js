import React from 'react'
import PropTypes from 'prop-types'
import burgerConstructorStyle from './burgerConstructor.module.css'
import cn from 'classnames'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { propTypesCard } from '../../utils/prop-types'
import { useDrag } from 'react-dnd'
import { removeBCItems } from '../../services/actions/constructorItems'
import { useDispatch } from 'react-redux'

const ConstructorCard = ({
    type,
    index,
    card,
    isLocked,
    additionalName = '',
}) => {
    const dispatch = useDispatch()

    const [{ isDragging }, dragRef] = useDrag({
        type: 'card',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0.5 : 1

    const handleDrag = card.type !== 'bun' ? dragRef : null

    const handleRemoveBCItem = (_id) => {
        dispatch(removeBCItems(_id))
    }
    return (
        <div
            ref={handleDrag}
            className={cn('mb-4', burgerConstructorStyle.element)}
            style={{ opacity }}
        >
            {!isLocked && <DragIcon type="primary" />}
            <div className={cn('ml-2 mr-2', burgerConstructorStyle.item)}>
                <ConstructorElement
                    handleClose={() => handleRemoveBCItem(card._id)}
                    type={type}
                    isLocked={isLocked}
                    text={`${card.name}${additionalName}`}
                    price={card.price}
                    thumbnail={card.image}
                />
            </div>
        </div>
    )
}

export default ConstructorCard

ConstructorCard.propTypes = {
    card: propTypesCard,
    isLocked: PropTypes.bool,
    additionalName: PropTypes.string,
}
