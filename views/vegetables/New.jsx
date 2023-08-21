import React from 'react'

function New() {
  return (
    <div>
        { /* form */ }
        <h1>New Vegetable Page</h1>

        <form action="/vegetables" method="POST">
                 Name: <input type="text" name="name"/><br/>
                 Color: <input type="text" name="color"/><br/>
                 Is Ready To Eat: <input type="checkbox" name="readyToEat"/><br/>
                 <input type="submit" name="" value="Create Vegetable"/>

        </form>
    </div>
  )
}

module.exports =  New;