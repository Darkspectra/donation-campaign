const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('Donation')
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}


const saveDonation = id => {
    const storedDonation = getStoredDonation()
    const exist = storedDonation.find(donationID => donationID == id)
    if (!exist){
        storedDonation.push(id)
        localStorage.setItem('Donation', JSON.stringify(storedDonation))
    }
}

export {getStoredDonation, saveDonation}