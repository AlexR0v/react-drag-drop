import React, { useState } from 'react'
import { Container, Header, Item, ItemCard, ItemImg, ItemName, List } from './ui'
import { initialData } from './initial-data'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


const App = () => {
  const [list, setList] = useState(initialData)

  const handleOnDragEnd = (res) => {
    if(!res.destination) return
    console.log(res)
    const items = Array.from(list)
    const [reorderItem] = items.splice(res.source.index, 1)
    items.splice(res.destination.index, 0, reorderItem)

    setList(items)
  }

  return (
    <>
      <Header>
        <h1>Drag-and-drop</h1>
      </Header>
      <Container>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='listItem'>
            {
              (provided) => (
                <List {...provided.droppableProps} ref={provided.innerRef}>
                  {
                    list.map(({ id, name, avatar }, index) => (
                      <Draggable
                        key={id}
                        draggableId={id}
                        index={index}
                      >
                        {
                          (provided) => (
                            <Item
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <ItemCard>
                                <ItemImg
                                  src={avatar}
                                  alt={name}
                                />
                              </ItemCard>
                              <ItemName>
                                {name}
                              </ItemName>
                            </Item>
                          )
                        }
                      </Draggable>
                    ))
                  }
                  {provided.placeholder}
                </List>
              )
            }
          </Droppable>
        </DragDropContext>
      </Container>
    </>
  )
}

export default App
