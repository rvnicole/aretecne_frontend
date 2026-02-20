export type LoginType = {
    email: string,
    password: string
}

export type RegisterType = {
    name: string,
    email: string,
    password: string,
    walletAddress: string
}

export type UserType = {
    id: string
    name: string,
    email: string,
    walletAddress: string
};

export type StoreType = {
    id: string,
    name: string,
    description: string,
    imagen: string,
    idUser: UserType
}

export type NewCampaing = {
    titulo: string,
    shortDescription: string,
    story: string,
    montoMeta: string,
    cantidadAcumulada: string,
    idAutor: UserType["id"],
    imagen: string
};

export type CampaignType = {
    _id: string,
    titulo: string,
    shortDescription: string,
    story: string,
    montoMeta: string,
    cantidadAcumulada: string,
    idUser: [ UserType ],
    idAutor: UserType,
    imagen: string
};

export type CampaingEditType = Pick<CampaignType, "_id"|"titulo"|"shortDescription"|"story"|"montoMeta">

export type DonateType = {
    idCampaign: string,
    idDonador: string,
    montoDonacion: string,
    urlRedirect: string
}