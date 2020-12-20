import Firebase from  '../Commons/FirebaseConfig'

const userSettingsApi = {};
const  db = Firebase.firestore()


userSettingsApi.getAllArsip = () => {
    return new Promise((resolve, reject) => {
        db.collection('arsip').get()
            .then((snapshot) => {
                let allArsip = []
                snapshot.forEach((doc) => {
                console.log(doc.data(), "<<<<<<")
                allArsip.push({...doc.data(), arsipId : doc.id});
                });

                resolve(allArsip)
            })
            .catch((err) => {
                reject(err)
            });
    })
}

userSettingsApi.createArsip = (createData) => {
    return new Promise((resolve, reject) => {
        db.collection('arsip').get()
            .then((snapshot) => {
                let allArsip = []
                snapshot.forEach((doc) => {
                allArsip.push( doc.data());
                });

                resolve(allArsip)
            })
            .catch((err) => {
                reject(err)
            });
    })
}




export default userSettingsApi