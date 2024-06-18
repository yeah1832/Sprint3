import { BookReviewItem, BookReviewItemWrite } from "../../models/book.model";
import styled from "styled-components";
import BookReviewsItem from "./BookReviewItem";
import BookReviewAdd from "./BookReviewAdd";

interface Props {
    reviews: BookReviewItem[];
    onAdd: (data: BookReviewItemWrite) => void;
}

function BookReview({reviews, onAdd}: Props){
    return (
        <BookReviewStyle>
            <BookReviewAdd onAdd={onAdd}/>
            {reviews.map((review) => 
                <BookReviewsItem review = {review}/>
            )}
        </BookReviewStyle>
    );
}

const BookReviewStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export default BookReview;