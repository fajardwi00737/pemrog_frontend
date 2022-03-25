import styles from './AddMovieForm.module.css';

function AddMovieForm(){
    return (
        <div className={styles.container}>
            <section className={styles.addMovie}>
                <div className={styles.addMovie__image__container}>
                    <img className={styles.addMovie__image} src="https://picsum.photos/600/400.jpg" alt="">
                    </img>
                </div>
                <div className={styles.addMovie__form__container}>
                    <h3 className={styles.addMovie__form__title}>Add Movie</h3>
                    <form className={styles.addMovie__form}>
                        <div className={styles.addMovie__master}>
                            <label className={styles.addMovie__label}>Title</label>
                            <input className={styles.addMovie__input}/>
                        </div>
                        <div className={styles.addMovie__master}>
                            <label className={styles.addMovie__label}>Year</label>
                            <input className={styles.addMovie__input}/>
                        </div>
                        <div className={styles.addMovie__master}>
                            <button className={styles.addMovie__button}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;