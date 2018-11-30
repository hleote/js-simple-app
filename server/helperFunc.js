

module.exports = {
    handlePaymentType: function (number) {
        if (number < 0) {
            return 'card'
        }
        return 'cash'
    },
    handleStatus: function (number) {
        if (number >= 20) {
            return 'successful'
        }
        else if (number > 0 && number < 20) {
            return 'failed'
        }
        return 'refunded'
    }
}
