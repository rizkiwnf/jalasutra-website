import React from "react";
import { HiFolderOpen, HiHome, HiUsers, HiDocumentPlus, HiCog6Tooth, HiUserCircle  } from "react-icons/hi2";


export const DASHBOARD_SIDEBAR_TOP = [
    {
        key: 'beranda',
        label: 'Beranda',
        path: '/dashboard',
        icon: <HiHome />,
    },
    {
        key: 'pengguna',
        label: 'Pengguna',
        path: '/users',
        icon: <HiUsers />,
    },
    {
        key: 'rekap-surat',
        label: 'Rekap Surat',
        path: '/rekap-surat',
        icon: <HiFolderOpen />,
    },
    {
        key: 'pengajuan-surat',
        label: 'Pengajuan Surat',
        path: '/pengajuan-surat',
        icon: <HiDocumentPlus />,
    },
]
export const DASHBOARD_SIDEBAR_BOTTOM = [
    {
        key: 'profile',
        label: 'Profile',
        path: '/profile-pengguna',
        icon: <HiUserCircle />,
    },
    {
        key: 'pengaturan',
        label: 'Pengaturan',
        path: '/pengaturan',
        icon: <HiCog6Tooth />,
    },
]