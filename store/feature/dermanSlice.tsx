import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
    {
        id: 1,
        name: 'Panadol',
        qram: "20 pcs",
        price: 15.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus esse reprehenderit doloribus at aliquam doloremque quod quisquam, iste molestias, recusandae blanditiis accusantium mollitia ipsum exercitationem sequi tenetur possimus quaerat ipsa libero laboriosam fugiat similique. Repudiandae commodi magni similique fugit? Minus perferendis, nobis nemo temporibus illum explicabo sed, recusandae alias quo repellat velit soluta doloribus, qui molestias iure. Unde recusandae illo, omnis facilis nemo dolores neque cumque ullam. Mollitia accusantium, perferendis omnis animi at deleniti dignissimos reprehenderit quia sapiente voluptate sint hic temporibus velit tempore ad vero? Quam numquam, sapiente saepe, obcaecati, ad laudantium consequuntur asperiores inventore repellat voluptate illum labore? Quos illo pariatur dolores adipisci nemo eveniet. Quae, repellendus esse cum suscipit sunt eos accusantium accusamus ex quam voluptas. Vero dolor, est vel maxime recusandae corrupti laboriosam sed dolorum ex eos aspernatur quo adipisci suscipit perspiciatis totam debitis sapiente quas repudiandae consequuntur saepe, aperiam et quasi. Eum, quaerat veritatis.',
        star: 19,
        imge: require('../../asset/imge/d.png'),
        star1: 1.4,
        isFavorite: false,
    },
    {
        id: 2,
        name: 'Bodrex Herbal',
        qram: "200 ml",
        price: 25.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus esse reprehenderit doloribus at aliquam doloremque quod quisquam, iste molestias, recusandae blanditiis accusantium mollitia ipsum exercitationem sequi tenetur possimus quaerat ipsa libero laboriosam fugiat similique. Repudiandae commodi magni similique fugit? Minus perferendis, nobis nemo temporibus illum explicabo sed, recusandae alias quo repellat velit soluta doloribus, qui molestias iure. Unde recusandae illo, omnis facilis nemo dolores neque cumque ullam. Mollitia accusantium, perferendis omnis animi at deleniti dignissimos reprehenderit quia sapiente voluptate sint hic temporibus velit tempore ad vero? Quam numquam, sapiente saepe, obcaecati, ad laudantium consequuntur asperiores inventore repellat voluptate illum labore? Quos illo pariatur dolores adipisci nemo eveniet. Quae, repellendus esse cum suscipit sunt eos accusantium accusamus ex quam voluptas. Vero dolor, est vel maxime recusandae corrupti laboriosam sed dolorum ex eos aspernatur quo adipisci suscipit perspiciatis totam debitis sapiente quas repudiandae consequuntur saepe, aperiam et quasi. Eum, quaerat veritatis.',
        star: 28,
        imge: require('../../asset/imge/d1.png'),
        star1: 3.7,
        isFavorite: false,
    },
    {
        id: 3,
        name: 'Konidin',
        qram: "59 pcs",
        price: 35.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus esse reprehenderit doloribus at aliquam doloremque quod quisquam, iste molestias, recusandae blanditiis accusantium mollitia ipsum exercitationem sequi tenetur possimus quaerat ipsa libero laboriosam fugiat similique. Repudiandae commodi magni similique fugit? Minus perferendis, nobis nemo temporibus illum explicabo sed, recusandae alias quo repellat velit soluta doloribus, qui molestias iure. Unde recusandae illo, omnis facilis nemo dolores neque cumque ullam. Mollitia accusantium, perferendis omnis animi at deleniti dignissimos reprehenderit quia sapiente voluptate sint hic temporibus velit tempore ad vero? Quam numquam, sapiente saepe, obcaecati, ad laudantium consequuntur asperiores inventore repellat voluptate illum labore? Quos illo pariatur dolores adipisci nemo eveniet. Quae, repellendus esse cum suscipit sunt eos accusantium accusamus ex quam voluptas. Vero dolor, est vel maxime recusandae corrupti laboriosam sed dolorum ex eos aspernatur quo adipisci suscipit perspiciatis totam debitis sapiente quas repudiandae consequuntur saepe, aperiam et quasi. Eum, quaerat veritatis.',
        star: 40.99,
        imge: require('../../asset/imge/d.png'),
        star1: 4.5,
        isFavorite: false,

    },
    {
        id: 4,
        name: 'Herd',
        qram: "75 ml",
        price: 39.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus esse reprehenderit doloribus at aliquam doloremque quod quisquam, iste molestias, recusandae blanditiis accusantium mollitia ipsum exercitationem sequi tenetur possimus quaerat ipsa libero laboriosam fugiat similique. Repudiandae commodi magni similique fugit? Minus perferendis, nobis nemo temporibus illum explicabo sed, recusandae alias quo repellat velit soluta doloribus, qui molestias iure. Unde recusandae illo, omnis facilis nemo dolores neque cumque ullam. Mollitia accusantium, perferendis omnis animi at deleniti dignissimos reprehenderit quia sapiente voluptate sint hic temporibus velit tempore ad vero? Quam numquam, sapiente saepe, obcaecati, ad laudantium consequuntur asperiores inventore repellat voluptate illum labore? Quos illo pariatur dolores adipisci nemo eveniet. Quae, repellendus esse cum suscipit sunt eos accusantium accusamus ex quam voluptas. Vero dolor, est vel maxime recusandae corrupti laboriosam sed dolorum ex eos aspernatur quo adipisci suscipit perspiciatis totam debitis sapiente quas repudiandae consequuntur saepe, aperiam et quasi. Eum, quaerat veritatis.',
        star: 42,
        imge: require('../../asset/imge/d1.png'),
        star1: 2,
        isFavorite: false,
    },
]







export const dermanSlice = createSlice({
    name: 'derman',
    initialState: { value: initialStateValue },
    reducers: {
        dermanaction: (state, action) => {
            state.value = action.payload
        },
        toggleFavorite: (state, action) => {
            const itemToUpdate = state.value.find((item) => item.id === action.payload);
            if (itemToUpdate) {
                itemToUpdate.isFavorite = !itemToUpdate.isFavorite;
            }
        },
    }
})

export const dermanReducer = dermanSlice.reducer
export const { dermanaction, toggleFavorite } = dermanSlice.actions