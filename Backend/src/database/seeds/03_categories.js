exports.seed = function(knex) {

    return knex('categories').del()
    .then(function() {

        return knex('categories').insert([
            {title: "Restaurante", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737415/uploads/Restaurante_bzkyvb.png", id_section: 1},
            {title: "Pizzaria", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737415/uploads/Pizzaria_fltuat.png", id_section: 1},
            {title: "Hamburguer", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737414/uploads/Hamburguer_nbxzye.png", id_section: 1},
            {title: "Padaria", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737415/uploads/Padaria_e9ppnf.png", id_section: 1},
            {title: "Mercados", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737414/uploads/Mercados_k8u4qd.png", id_section: 2},
            {title: "Atacados", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737413/uploads/Atacados_on2gqm.png", id_section: 2},
            {title: "Farmácia", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737414/uploads/Farmacia_xa3ec4.png", id_section: 3},
            {title: "Suplementos", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737415/uploads/suplementos_mnzmvq.png", id_section: 3},
            {title: "Estética", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737414/uploads/Estetica_hg9pyj.png", id_section: 4},
            {title: "Moda e Acessórios", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737414/uploads/Moda_pixasf.png", id_section: 4},
            {title: "Papelaria", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737415/uploads/Papelaria_sku4ti.png", id_section: 5},
            {title: "Livraria", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737414/uploads/Livraria_v5qxqe.png", id_section: 5},
            {title: "Material", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737414/uploads/Material_bmjrnq.png", id_section: 6},
            {title: "Ferramenta", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737414/uploads/Ferramentas_kyxalc.png", id_section: 6},
            {title: "Barbeiro", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737413/uploads/Barbeiro_c6zqlt.png", id_section: 7},
            {title: "Odontologia", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737415/uploads/Odontologia_ix4aaz.png", id_section: 8},
            {title: "UX | UI Design", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737415/uploads/Ux_r2yynp.png", id_section: 9},
            {title: "Babá", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737413/uploads/Baba_sffrlt.png", id_section: 10},
            {title: "Cozinheira", img_url: "https://res.cloudinary.com/dbehp0gsj/image/upload/v1593737413/uploads/Cozinheira_xzdc0n.png", id_section: 10}
        ]);
    });
}