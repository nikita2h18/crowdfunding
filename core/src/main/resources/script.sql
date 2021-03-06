create type role as enum ('admin', 'default_user');

alter type role owner to postgres;

create table "user"
(
  id       bigserial not null
    constraint "user_pk"
      primary key,
  login    varchar   not null,
  password varchar   not null,
  role     role      not null
);

alter table "user"
  owner to postgres;

create unique index "user_login_uindex"
  on "user" (login);

create table category
(
  id   bigserial not null
    constraint category_pk
      primary key,
  name varchar   not null
);

alter table category
  owner to postgres;

create table tags
(
  id   bigserial not null
    constraint tags_pk
      primary key,
  name varchar   not null
);

alter table tags
  owner to postgres;

create table campaign
(
  id          bigserial        not null
    constraint campaign_pk
      primary key,
  name        varchar          not null,
  summary     varchar          not null,
  target      double precision not null,
  user_id     bigint           not null
    constraint campaign_user_id_fk
      references "user",
  date_from   date             not null,
  date_to     date             not null
);

alter table campaign
  owner to postgres;

create unique index company_name_uindex
  on campaign (name);

create table token
(
  id      bigserial not null
    constraint token_pk
      primary key,
  token   varchar   not null,
  user_id bigint    not null
    constraint token_user_id_fk
      references "user"
);

alter table token
  owner to postgres;

create unique index token_token_uindex
  on token (token);

