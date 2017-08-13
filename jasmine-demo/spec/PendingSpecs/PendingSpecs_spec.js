describe('Pending specs', function () {

    xit('can be declared "xit"', function () {
        /* code and assertions */
    });

    it('can be declared with "it" but without a function');

    it('can be declared by calling "pending" in the body', function () {
        /* code and assertions */
        pending('this is why it is pending');
    });
}); 