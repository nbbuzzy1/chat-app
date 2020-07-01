const socket = io()

document.getElementById('increment').addEventListener('click', () => {
    socket.emit('increment')
})


socket.on('countUpdated', (count) => {
    console.log('The count has been updated!', count)
});