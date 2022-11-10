useEffect(() => { 

    if(Services.getViewPortWidth() < 800) {
        setShownReviews([reviews[0]]);
    } else if(Services.getViewPortWidth() >= 800
    && Services.getViewPortWidth() < 1024) {
        setShownReviews([reviews[0], reviews[1]]);
    } else if(Services.getViewPortWidth() >= 1024) {
        setShownReviews([reviews[0], reviews[1], reviews[2]]);
    }
    
    setInterval( updateCount, 1000);

}, []);

 function addCount() {
        updateCount("forward");
    }

    function lowerCount() {
        updateCount("backward");
    }


    function updateCount(action = null) {

        

        setCount(prevCount => {
            const numReviews = reviews.length - 1;

            if(action === "forward") {
                if(prevCount === numReviews) {
                    prevCount = 0;
                } else {
                    prevCount++;
                }
            }
    
            if(action === "backward") {
                if(prevCount === 0) {
                    prevCount = numReviews;
                } else {
                    prevCount--;
                }
            }

            if(Services.getViewPortWidth() < 800) {
                reviews.forEach( (review, index) => {
                    if(index === prevCount) {
                        setShownReviews([review]);
                    }
                });
            }
            
            if(Services.getViewPortWidth() >= 800
            && Services.getViewPortWidth() < 1024) {
                let newShownReviews = [];
                // console.log("updating", prevCount);
                reviews.forEach((review, index) => {
                    if(index === prevCount || index === prevCount + 1 ) {
                        if( index === prevCount) {
                            newShownReviews.push(review);
                        } 

                        if (prevCount === reviews.length - 1) {
                            console.log("index is equal to reviews.length");
                            newShownReviews.push(reviews[0]);
                        }

                        if(index === prevCount + 1) {
                            newShownReviews.push(review);
                        }
                    }
                });
                setShownReviews(newShownReviews);
            }

            if(Services.getViewPortWidth() >= 1024) {
                let newShownReviews = [];
                const numReviews = reviews.length - 1;
                // console.log("updating", prevCount);
                reviews.forEach((review, index) => {
                    if(index === prevCount 
                    || index === prevCount + 1 
                    || index === prevCount + 2 ) {

                        if( index === prevCount) {
                            newShownReviews.push(review);
                            if (prevCount === numReviews) {
                                console.log("the index has reached the end of the array");
                                newShownReviews.push(reviews[0], reviews[1]);
                            }
                        } else if(index === prevCount + 1) {
                            newShownReviews.push(review);
                            if(prevCount + 1 === numReviews) {
                                console.log("the index +1 has reached the end of the array");
                                newShownReviews.push(reviews[0]);
                            }
                        } else if(index === prevCount + 2) {
                            newShownReviews.push(review);
                        }
                    }
                });
                setShownReviews(newShownReviews);
            }

            if (prevCount === numReviews) {
                return prevCount - 1;
            } else {
                return prevCount + 1;
            }
        });
    }