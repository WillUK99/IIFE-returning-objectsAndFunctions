const log = console.log

const app = (function() {
    return {
        purchaseCoke: function(money) {
            if(money >= 2) {
                this.refundPolicy
                return true
            } else {
                this.invalidFundsError(money)
            }
        },
        invalidFundsError: function(money) {
            log(`Ooops sorry you only have ${money}, come back when you have enough... noob`)
        }
    }
})()

let hadEnough;
hadEnough = app.purchaseCoke(1)
if(hadEnough) {
    log(`Thanks for the purchase :)`)
}




