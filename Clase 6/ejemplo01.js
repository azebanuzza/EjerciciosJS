const datosUsuarios = [
    {"nombre": 'Flavia',
    "password": '1234'
    },

    {"nombre": 'Laura',
    "password": '567894'
    },

    {"nombre": 'Leonardo',
    "password": 'abcder'
    },

    {"nombre": 'Rodolfo',
    "password": 'adfgadfg'
    },

    {"nombre": 'Romina',
    "password": 'abced1234'
    },
]

const soloPassword = datosUsuarios.map(function(p){
    return p.password;
})

console.log(soloPassword);