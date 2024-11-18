import { Fragment } from "react";

export default function EditAddress({ addressBook, handleAddressChange }){
  const list = addressBook.map(address => {
    return (
      <Fragment key={ address.id }>
        <label htmlFor={ address.id }>{ address.name }</label>
        <input
          id={ address.id }
          type="text"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          name={ address.id }
=======
          name={ address.name }
>>>>>>> 1b0d2fc (🚧)
=======
          name={ address.id }
>>>>>>> 19ce6f9 (🚧)
=======
          name={ address.name }
>>>>>>> 1b0d2fc (🚧)
=======
          name={ address.id }
>>>>>>> 19ce6f9 (🚧)
          value={ address.value }
          onChange={ handleAddressChange }
        />
        <br/>
      </Fragment>
    );
  });

  return list;
}