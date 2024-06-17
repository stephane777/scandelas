'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { Button, Link } from '@nextui-org/react';
import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher';
// import {  Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['About', 'Settings', 'Blog', 'Log Out'];

  return (
    <Navbar
      maxWidth="full"
      // shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          srOnlyText="open main menu"
        />
      </NavbarContent>

      <NavbarContent className="pr-3 md:hidden" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">S.CANDELAS _</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden w-full gap-4 md:flex" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="text-2xl font-bold text-inherit">S.CANDELAS _</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Settings
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="pl-12">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                // index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'
                'foreground'
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
