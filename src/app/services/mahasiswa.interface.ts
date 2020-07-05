export interface Mahasiswa{
    mahasiswaId?: number;
    description: string;
    tagName: string;
    tagColor: string;
    date: string;
    favorite: boolean;
}

export interface UserMahasiswa{
    id?: string;
    listMahasiswa: Mahasiswa[];
}
