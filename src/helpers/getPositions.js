const positions = []
let id = 0
const firstPosition = {
    id,
    top: 0,
    left: 400
}

positions.push({...firstPosition})

for (let i = 0; i < 5; i++) {
    firstPosition.id++
    firstPosition.top += 50
    positions.push({...firstPosition})
}

firstPosition.top += 50

for (let i = 0; i < 6; i++) {
    firstPosition.id++

    firstPosition.left += 50
    positions.push({...firstPosition})
}

for (let i = 0; i < 2; i++) {
    firstPosition.id++

    firstPosition.top += 50
    positions.push({...firstPosition})
}

for (let i = 0; i < 5; i++) {
    firstPosition.id++

    firstPosition.left -= 50
    positions.push({...firstPosition})
}

firstPosition.left -= 50

for (let i = 0; i < 6; i++) {
    firstPosition.id++

    firstPosition.top += 50
    positions.push({...firstPosition})
}

for (let i = 0; i < 2; i++) {
    firstPosition.id++

    firstPosition.left -= 50
    positions.push({...firstPosition})
}

for (let i = 0; i < 5; i++) {
    firstPosition.id++

    firstPosition.top -= 50
    positions.push({...firstPosition})
}

firstPosition.top -= 50

for (let i = 0; i < 6; i++) {
    firstPosition.id++

    firstPosition.left -= 50
    positions.push({...firstPosition})
}


for (let i = 0; i < 2; i++) {
    firstPosition.id++

    firstPosition.top -= 50
    positions.push({...firstPosition})
}


for (let i = 0; i < 5; i++) {
    firstPosition.id++

    firstPosition.left += 50
    positions.push({...firstPosition})
}

firstPosition.left += 50

for (let i = 0; i < 6; i++) {
    firstPosition.id++

    firstPosition.top -= 50
    positions.push({...firstPosition})
}

for (let i = 0; i < 1; i++) {
    firstPosition.id++

    firstPosition.left += 50
    positions.push({...firstPosition})
}


console.log(positions)
