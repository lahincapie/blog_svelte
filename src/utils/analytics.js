const analyticsTracking = (evenName) => {
    if(typeof windows !== 'undefined') {
        window.ga('send', 'event', 'social', 'click', evenName, {
            nonInteraction: true
        });
    }
};

export default analyticsTracking;