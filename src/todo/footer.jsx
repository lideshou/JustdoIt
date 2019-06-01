import "../assets/styles/footer.styl"

export default {
    data () {
        return{
            author:"德寿"
        }
    },
    render(){
        return(
        <div class="footer">
            <span>Written by {this.author}</span>
        </div>
        )
    }
}