type CommentProps = {
    comment: {
        user: string;
        comment: string;
        time: Date;
    };
};

// Function to parse and format the timestamp into a readable format
const parseCommentTime = (time: Date) => {
    const date = new Date(time);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const Comment = ({ comment }: CommentProps) => {
    return (
        <div className="comment">
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    );
};

export default Comment;
