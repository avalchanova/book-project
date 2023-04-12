export const bookValidations = (data) => {
    // TODO: does not return which is why it is not used in the project
    const { ...bookData } = data;
    if (bookData.title.length === 0) {
        alert(`Please enter a title.`);
        // window.location.href = "http://www.w3schools.com";
    }
    if (bookData.author.length === 0) {
        alert(`Please enter an author.`);
        return;
    }
    if (bookData.imageUrl.length === 0) {
        alert(`Please enter an image URL.`);
        return;
    }
    if (bookData.summary.length === 0) {
        alert(`Please enter a brief summary of the book.`);
        return;
    }
    if (bookData.genre === "") {
        alert(`Please choose an existing genre or select "other".`);
        return;
    }
    if (bookData.favouriteQuote.length === 0) {
        alert(`Please enter a your favourite quote.`);
        return;
    }
    if (bookData.year === '') {
        alert(`Please enter year of publication.`);
        return;
    }
};