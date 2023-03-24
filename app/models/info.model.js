module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            school: String,
            firstname: String,
            lastname: String,
            address: String 
        },
        {
            timestamps: true
        }
    );
    const Info = mongoose.model("info", schema)
    return Info
}