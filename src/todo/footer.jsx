import "../assets/styles/footer.styl"

export default {
    data () {
        return{
            author:"Lideshou"
        }
    },
    render(){
        return(
        <div class="footer">
            <span>Written by <span class="theauthor">{this.author}</span></span>
        </div>
        )
    }
}