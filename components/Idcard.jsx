function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return <div className="border border-black border border-3 mb-3 my-4 m-2" style={{maxWidth: "2000px", maxHeight: "500px"}}>     
            <div className="row g-0">
              <div className="d-flex justify-content-center col-md-4">
                <img src={picture} className="mt-5 img-fluid rounded-start" style={{maxWidth: "200px", maxHeight: "200px" }} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="">
              <div className="firstName"><h3>First Name:</h3>{firstName}</div>
              <div className="lastName"><h3>Last Name:</h3>{lastName}</div>
              <div className="gender"><h3>Gender:</h3>{gender}</div>
              <div className="height"><h3>Height:</h3>{height}</div>
              <div className="birth"><h3>Birth:</h3>{birth}</div>
          </div>
        </div>
      </div>
    </div>
}

export default IdCard;