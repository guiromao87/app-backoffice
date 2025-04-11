const Home = () => {
    
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    
    return (
        <div>
            <h2>Home</h2>
                <div>
                    Nome: {name}
                </div>
                <div>
                    Email: {email}
                </div>
        </div>
    )
}

export default Home