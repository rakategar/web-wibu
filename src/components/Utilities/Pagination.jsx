const Pagination = ({page, lastPage, setPage}) => {
    const handleNextPage = () => {
        scrollTop()
            setPage((prevState) => prevState + 1)
    }
    const handlePrevPage = () => {
        scrollTop()
            setPage((prevState) => prevState - 1)
    }

    const scrollTop = () => {
        scrollTo ({
            behavior : "smooth",
            top : 0
        })
    }
    return (
        <div className="flex justify-center items-center p-5 gap-4 text-palete-primary text-2xl">
            {page <= 1?  null :
            <button  className="transition-all hover:text-palete-accent " onClick={handlePrevPage}>{"Prev  <<<"}</button>
            }
            <p>{page} dari {lastPage}</p>
            {page >= lastPage? null :
            <button disabled={page === lastPage} className="transition-all hover:text-palete-accent" onClick={handleNextPage}  >{" >>>  Next"} </button>
            }
        </div>
    )
}
export default Pagination