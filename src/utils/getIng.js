export function getIngredient(selectedCard, id) {
    const ing = selectedCard.find((card) => {
        return card._id === id
    })
    return ing
}
