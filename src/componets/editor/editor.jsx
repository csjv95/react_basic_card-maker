import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';
import styles from './editor.module.css'

const Editor = ({cards, onAdd, updateCard, deleteCard, FileInput }) => {
  return(
    <section className={styles.editor}>
    <h3 className={styles.title}>Card Maker</h3>
    {Object.keys(cards).map(key=> <CardEditForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} FileInput={FileInput}/>)}
    <CardAddForm cards={cards} onAdd={onAdd} FileInput={FileInput}/>
    </section>
  )
}

export default Editor;