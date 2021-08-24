import React, { useState } from "react";
import { useForm  } from "react-hook-form";
import { createBook } from "../api";
import FileBase from "react-file-base64"
const SuggestBookForm = ({getAllBooks}) => {
    const { register, handleSubmit, watch , formState: { errors } } = useForm();
    const [ bookCover, setBookCover ] = useState();
    const onSubmit = async (data) => {
        data.coverColors = [data.coverColor1,data.coverColor2];
        data.bookCategories = data.bookCategories.split(",");
        for (let i = 0; i < data.bookCategories.length; i++) {
            let cat = data.bookCategories[i].split("");
            while(cat[0] === " ") cat.shift();
            while(cat[cat.length - 1] === " ") cat.pop();
            data.bookCategories[i] = cat.join("");
        }
        delete data.coverColor1;
        delete data.coverColor2;
        data.bookCover = bookCover;
        await createBook(data);
        await getAllBooks();
    };
    return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}  className="sugget-book-form">
            <fieldset>
                <legend>Sugget me a book and I will add it to a website</legend>
                <div>
                    <label htmlFor="title">Book Title</label>
                    <input type="text" id="title" placeholder="Title" {...register("bookTitle")}/>
                </div>
                <div>
                    <label htmlFor="author">Book Author</label>
                    <input type="text" id="author" placeholder="Author" {...register("bookAuthor")}/>
                </div>
                <div>
                    <label htmlFor="categories">Book Categories</label>
                    <input type="text" id="categories" placeholder="Categories" {...register("bookCategories")}/>
                </div>
                <div>
                    <label htmlFor="img-link">Upload Book Cover</label>
                    <div className="row">
                        <div className={bookCover === undefined ? "col-sm-12" : "col-sm-8"} style={{alignSelf: "center"}}>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({base64}) => setBookCover(base64)}
                            />
                            <div>
                                <label htmlFor="color 1">Cover Color 1</label>
                                <input type="color" defaultValue={"#ffffff"} {...register("coverColor1")} />
                                {watch().coverColor1}
                                <input type="text" value={watch().coverColor1} id="colors 1" placeholder="Cover Color 1"/>
                            </div>
                            <div>
                                <label htmlFor="color 2">Cover Color 2</label>
                                <input type="color" {...register("coverColor2")}/>
                                <input type="text" value={watch().coverColor2} id="colors 2" placeholder="Cover Color 2" />
                            </div>
                        </div>
                        <div className={bookCover === undefined ? "hide" : "col-sm-4"}>
                            <img className="uploaded-image" src={bookCover} />
                        </div>
                    </div>
                </div>
                <button className="add-book-btn" type='submit'>Submit</button>
            </fieldset>
        </form>

    </>
    );
}

export default SuggestBookForm;