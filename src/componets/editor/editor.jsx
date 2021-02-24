import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';
import styles from './editor.module.css'

const Editor = ({cards,onAdd}) => {
  return(
    <section className={styles.editor}>
    <h3 className={styles.title}>Card Maker</h3>
    {cards.map(card=> <CardEditForm key={card.id} card={card}/>)}
    <CardAddForm cards={cards} onAdd={onAdd}/>
    </section>
  )
}

export default Editor;