
function Button(){
 // Inline CSS styling
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px", /* to roound the corners */
        border: "none",
        cursor: "pointer",
    }
    

    return(
        <button style={styles}>Click me</button>
    );
}


export default Button