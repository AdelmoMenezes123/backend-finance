// document.cookie = "authorization=;path=/";
// document.cookie = "loggedUsername=;path=/";

// $("#login-form").submit(function () {
//     var login = $('[name="login"]').val();
//     var senha = $('[name="senha"]').val();

//     $.ajax({
//         url: "/authenticate",
//         type: 'POST',
//         data: { login: login, senha: senha },
//         success: function (data, textStatus, xhr) {
//             document.cookie = "authorization=Bearer " + data.token + ";path=/";
//             document.cookie = "loggedUsername=" + data.usuario.nome + ";path=/";

//             window.location.href = '/';
//         },
//         error: function (response, textStatus, errorThrown) {
//             alert(response.responseText);
//         }
//     });

//     return false;
// });
